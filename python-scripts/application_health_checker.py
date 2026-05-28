import requests
url = "https://google.com"
response = requests.get(url)
if response.status_code == 200:
    print("Application is UP")
else:
  print("Application is DOWN")
