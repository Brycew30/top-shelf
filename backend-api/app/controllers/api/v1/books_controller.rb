module Api::V1
class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]

  def index
    @user = User.find(params[:user_id])
    @books = @user.books
    render json: [@user, @books]
  end

  def show
    render json: @book
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def update
    if @book.update(book_params)
      render json: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @book.destroy
  end

  private
    def set_book
      @book = Book.find(params[:id])
    end

    def book_params
      params.require(:book).permit(:title, :author, :description, :comment, :isbn, :user_id)
    end
end
end
