require 'sinatra'
require 'json'
require 'faker'

NUM_CATEGORIES = 10
NUM_CONTACTS = rand(100) + 400

set :protection, :except => [:json_csrf]

def mailify(s, sub = '-')
  s.downcase.gsub(/\W+/, sub)
end

def random_num(lower, upper)
  rand(upper - lower + 1) + lower
end

def random_digit_string(min_len, max_len = min_len)
  Array.new(random_num(min_len, max_len)) do
    rand(10).to_s
  end.join
end

def random_phone
  if (rand < 0.2)
    "+4#{rand(10)} #{random_digit_string(2,4)} #{random_digit_string(4,8)}"
  else
    "0#{random_digit_string(2,4)} #{random_digit_string(4,8)}"
  end
end

get '/' do
  companies = Array.new(50) { Faker::Company.name }
  company_emails = Hash[companies.map{ |company| [company, mailify(company) + ['.com', '.de', '.org', '.co.uk', '.net'].sample] }]

  colors = ['silver', 'gray', 'white', 'maroon', 'red', 'purple', 'fuchsia', 'green', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'aqua', 'orange', 'aliceblue', 'antiquewhite', 'aquamarine', 'azure', 'beige', 'bisque', 'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'limegreen', 'linen', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'oldlace', 'olivedrab', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'whitesmoke', 'yellowgreen', 'rebeccapurple']
  categorie_names = ['Friend', 'Family', 'School', 'Work', 'Enemies', 'Business', 'Acquaintances', 'VIP', 'Customer', 'Supplier']
  categories = categorie_names.sample(NUM_CATEGORIES).shuffle.zip(colors.shuffle).map.with_index { |(name, color), index| {id: index + 1, name: name, color: color} }
  mail_providers = ['web.de', 'gmail.com', 't-online.de', 'gmx.de', 'gmx.net', 'googlemail.com', 'arcor.de', 'alice-dsl.de']



  contacts = Array.new(NUM_CONTACTS) do
    name = Faker::Name.name
    company = companies.sample
    emails = mail_providers.sample(rand(4))
    if (rand > 0.5 || emails.empty?)
      emails << company_emails[company]
    end
    emails = emails.map{ |suffix| mailify(name, '.') + '@' + suffix }
    phones = Array.new(rand(2) + 1) { random_phone }
    addresses = Array.new(rand(2) + 1) { "#{Faker::Address.street_name} #{rand(200) + 2}#{ ['', '', '', 'a', 'b'].sample }\n#{Faker::Address.zip} #{Faker::Address.city}" }

    {
      name: name,
      company: company,
      addresses: addresses,
      phones: phones,
      emails: emails,
      dateOfBirth: Faker::Time.between(DateTime.new(1950,1,1), DateTime.new(2000,12,31)).strftime('%Y-%m-%d'),
      category: categories.sample[:id]
    }
  end

  content_type :json
  body JSON.pretty_generate(categories: categories, contacts: contacts)
end
