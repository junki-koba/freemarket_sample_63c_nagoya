# frozen_string_literal: true

class Users::RegistrationsController < Devise::RegistrationsController
  
  password = Devise.friendly_token.first(7)
    if session[:provider].present? && session[:uid].present?
      @user = User.create(nickname:session[:nickname], email: session[:email], password: "password", password_confirmation: "password", firstname_kana: session[:firstname_kana],lastname_kana: session[:lastname_kana], firstname: session[:firstname], lastname: session[:lastname], birthday: session[:birthday])
      sns = SnsCredential.create(user_id: @user.id,uid: session[:uid], provider: session[:provider])
    else
      @user = User.create(nickname:session[:nickname], email: session[:email], password: session[:password], password_confirmation: session[:password_confirmation],firstname_kana: session[:firstname_kana],lastname_kana: session[:lastname_kana], firstname: session[:firstname], lastname: session[:lastname], birthday: session[:birthday])
    end
  
  # # before_action :configure_sign_up_params, only: [:create]
  # before_action :configure_account_update_params, only: [:update]

  # GET /resource/sign_up
  # def new
  #   super
  # end

  # POST /resource
  # def create
  #   super
  # end

  # GET /resource/edit
  # def edit
  #   super
  # end

  # PUT /resource
  # def update
  #   super
  # end

  # DELETE /resource
  # def destroy
  #   super
  # end

  # GET /resource/cancel
  # Forces the session data which is usually expired after sign
  # in to be expired now. This is useful if the user wants to
  # cancel oauth signing in/up in the middle of the process,
  # removing all OAuth session data.
  # def cancel
  #   super
  # end

  # protected

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_sign_up_params
  #   devise_parameter_sanitizer.permit(:sign_up, keys: [:attribute])
  # end

  # If you have extra params to permit, append them to the sanitizer.
  # def configure_account_update_params
  #   devise_parameter_sanitizer.permit(:account_update, keys: [:attribute])
  # end

  # The path used after sign up.
  # def after_sign_up_path_for(resource)
  #   super(resource)
  # end

  # The path used after sign up for inactive accounts.
  # def after_inactive_sign_up_path_for(resource)
  #   super(resource)
  # end
end
