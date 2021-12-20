from urllib.parse import quote_plus
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
    url = "https://www.unsin.co.kr/unse/saju/total/form"
    display = Display(visible=False, size=(800, 600))
    display.start()
    chrome_options = webdriver.ChromeOptions()
    chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
    # chrome_options.add_argument("--headless")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--no-sandbox")
    driver = webdriver.Chrome(executable_path=os.environ.get("CHROMEDRIVER_PATH"), chrome_options=chrome_options)
    driver.get(url)
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='user_name']"))).send_keys(name)
    year_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_yyyy']")))
    select = Select(year_menu)
    select.select_by_value(year)
    # if sex == "Male":
    #     sex_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='frm']/div[1]/dl[2]/dd/span[1]/label")))
    # else:
    #     sex_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='frm']/div[1]/dl[2]/dd/span[2]/label")))
    # sex_menu.click()
    # month_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_mm']")))
    # select = Select(month_menu)
    # select.select_by_value(month)
    # day_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_dd']")))
    # select = Select(day_menu)
    # select.select_by_value(day)
    # hour_menu = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='birth_hh']")))
    # select = Select(hour_menu)
    # select.select_by_value(hour)
    actions = ActionChains(driver)
    actions.send_keys(Keys.ENTER)
    actions.perform()
    time.sleep(10)
    html = driver.page_source
    # context = driver.find_element(By.XPATH, "/html/body/div[2]/div/div[2]/div/div/div/div/div[3]/dl[1]/dd").text
    # imgtxt1 = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.ID,"sjms_side")))
    # tds = WebDriverWait(imgtxt1, 10).until(EC.element_to_be_clickable((By.TAG_NAME,"td")))
    # print(tds)
    
    # img1 = WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='sjms_side']/table/tbody/tr[1]/td[2]/img"))).get_attribute("src")
    display.stop()
    # driver.quit()
    return [html, "img1", "imgtxt1"]