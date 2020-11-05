Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :users do
        resources :books
      end
      post 'login', action: :login, controller: 'users'
    end
  end

  get 'api/v1/science', to: 'fetch_books#science'
  get 'api/v1/nonfiction', to: 'fetch_books#nonfiction'
  get 'api/v1/fiction', to: 'fetch_books#fiction'
end
