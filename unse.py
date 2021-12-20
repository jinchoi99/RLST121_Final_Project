from urllib.parse import quote_plus
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time
import os
from selenium.webdriver.support.wait import WebDriverWait 
import selenium.webdriver.support.expected_conditions as EC
from pyvirtualdisplay import Display

def all(name, sex, year, month, day, hour):
    display = Display(visible=False, size=(800, 600))
    display.start()
    
    chrome_options = webdriver.ChromeOptions()
    chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
    chrome_options.add_argument('--disable-dev-shm-usage')
    chrome_options.add_argument('--no-sandbox')
    driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)
    url = "https://www.unsin.co.kr/unse/saju/total/form"
    
    driver.get(url)
    # WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='user_name']"))).send_keys("Jinny")
    # WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='frm']/div[1]/dl[3]/span[1]"))).click()
    # ddelement= Select(WebDriverWait(driver, 10).until(EC.element_to_be_selected((By.ID, "birth_yyyy"))))
    # ddelement.select_by_index(1)
    # driver.find_element_by_css_selector("#birth_yyyy [value=\"1999\"]").click()
    # WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_yyyy']"))).click()
    actions = ActionChains(driver)
    actions.send_keys(Keys.DOWN)
    actions.send_keys(Keys.ENTER)
    actions.send_keys(Keys.ENTER)
    actions.perform()
    time.sleep(10)
    html2 = driver.page_source
    # context = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div/div/div/div/div[3]/dl[1]/dd").text
    # imgtxt1 = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID,"sjms_side")))
    # tds = WebDriverWait(imgtxt1, 10).until(EC.element_to_be_clickable((By.TAG_NAME,"td")))
    # print(tds)
    
    # img1 = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='sjms_side']/table/tbody/tr[1]/td[2]/img"))).get_attribute("src")
    # driver.quit()
    display.stop()
    return [html2, "img1", "imgtxt1"]