require File.expand_path('../boot', __FILE__)

require 'rails/all'

Bundler.require(:default, Rails.env) if defined?(Bundler)

module SwapJs
  class Application < Rails::Application
    config.encoding = "utf-8"
    config.filter_parameters += [:password]
    config.action_view.javascript_expansions[:defaults] = ['jquery', 'jquery_ujs']
  end
end
