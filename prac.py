import requests

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.support.ui import WebDriverWait, Select
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, TimeoutException, UnexpectedAlertPresentException

from pyvirtualdisplay import Display

def pp():
  display = Display(visible=0, size=(2880, 1800)).start()
  driver = webdriver.Chrome()
  
  driver.get("https://www.google.com")
  tt = driver.title
  driver.quit()
  display.stop()
  return tt