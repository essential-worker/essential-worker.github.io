source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem 'jekyll-paginate'

# bundle tzinfo gems on Windows and JRuby
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?
