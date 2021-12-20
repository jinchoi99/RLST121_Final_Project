from bs4 import BeautifulSoup
from urllib.parse import quote_plus
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
from webdriver_manager.chrome import ChromeDriverManager
import time
import os
from selenium.webdriver.support.wait import WebDriverWait 
import selenium.webdriver.support.expected_conditions as EC

def all(name, sex, year, month, day, hour):
    url = "https://www.unsin.co.kr/unse/saju/total/form"
    
    gChromeOptions = webdriver.ChromeOptions()
    gChromeOptions.add_argument("window-size=1920x1480")
    gChromeOptions.add_argument("disable-dev-shm-usage")
    gChromeOptions.add_argument("--headless")
    gChromeOptions.add_argument("--disable-dev-shm-usage")
    gChromeOptions.add_argument("--no-sandbox")
    gChromeOptions.add_argument("headless")
    gChromeOptions.add_experimental_option("detach", True)
    driver = webdriver.Chrome(
        chrome_options=gChromeOptions, executable_path=ChromeDriverManager().install()
    )

    driver.get(url)
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='user_name']"))).send_keys(str(name))
    year_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_yyyy']")))
    select = Select(year_menu)
    if sex == "Male":
        sex_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='frm']/div[1]/dl[2]/dd/span[1]/label")))
    else:
        sex_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='frm']/div[1]/dl[2]/dd/span[2]/label")))
    sex_menu.click()
    select.select_by_value(str(year))
    month_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_mm']")))
    select = Select(month_menu)
    select.select_by_value(str(month))
    day_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_dd']")))
    select = Select(day_menu)
    select.select_by_value(str(day))
    hour_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_hh']")))
    select = Select(hour_menu)
    select.select_by_value(str(hour))
    actions = ActionChains(driver)
    actions.send_keys(Keys.ENTER)
    actions.perform()
    time.sleep(10)
    
    context = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "/html/body/div[2]/div/div[2]/div/div/div/div/div[3]/dl[1]/dd"))).text
    
    imgtxt1 = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='sjms_side']/table/tbody/tr[1]/td[2]/p"))).text
    
    img1 = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='sjms_side']/table/tbody/tr[1]/td[2]/img"))).get_attribute("src")
    return [context, img1, imgtxt1]