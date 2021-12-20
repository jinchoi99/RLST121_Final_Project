def all():
  from bs4 import BeautifulSoup
  from urllib.parse import quote_plus
  from flask.sessions import NullSession
  from selenium import webdriver
  from selenium.webdriver.chrome.service import Service
  from selenium.webdriver.chrome.options import Options
  from selenium.webdriver.common.by import By
  from selenium.webdriver import ActionChains
  from selenium.webdriver.common.touch_actions import TouchActions
  from selenium.webdriver.common.keys import Keys
  from selenium.webdriver.support.ui import Select
  import time
  from selenium.common.exceptions import NoSuchElementException

  # driver_loc = "./chromedriver"
  # s = Service(driver_loc)
  # chrome_options = Options()
  # chrome_options.add_argument("headless")
  # chrome_options.add_experimental_option("detach", True)
  # driver = webdriver.Chrome(service=s, options=chrome_options)
  
  options = webdriver.ChromeOptions()
  options.binary_location = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
  chrome_driver_binary = "/usr/local/bin/chromedriver"
  driver = webdriver.Chrome(chrome_driver_binary, chrome_options=options)


  driver.get("https://www.google.com/")
  html = driver.page_source
  # print(html)
  driver.quit()
  return html

if __name__ == "__main__":
    print(all())