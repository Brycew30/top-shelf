module Api::V1
class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    render json: @user
  end

  def create
    @user = User.new(username: params[:user][:username], password: params[:user][:password])
    if @user.save
      jwt = Auth.encrypt({user_id: @user.id})
      render json: {jwt: jwt, user: @user}
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def login
    @user = User.find_by(username: params[:user][:username])
    if @user && @user.authenticate(params[:user][:password])
      jwt = Auth.encrypt({user_id: @user.id})
      render json: {jwt: jwt, user: @user}
    else
      render json: @user.errors, status: 404
    end
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
    
end
end
