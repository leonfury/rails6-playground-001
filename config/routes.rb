Rails.application.routes.draw do
    resources :libraries
    root "libraries#index"
    post "/viewlib" => "libraries#viewlib"
end
