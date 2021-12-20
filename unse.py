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

# https://stackoverflow.com/questions/65879929/selenium-chrome-webdriver-process-working-locally-but-not-on-heroku
# [Solved] Selenium can find element when run locally but can't find element when run on Heroku server

def all():
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
    # version="96.0.4664.45"
    
    # chrome_options = Options()
    # chrome_options.binary_location = os.environ.get("GOOGLE_CHROME_BIN")
    # chrome_options.add_argument("--headless")
    # chrome_options.add_argument("--disable-dev-shm-usage")
    # chrome_options.add_argument("--no-sandbox")
    # s = Service(executable_path=os.environ.get("CHROMEDRIVER_PATH"))
    # driver = webdriver.Chrome(service=s, options=chrome_options)


    driver.get(url)
    # usrname = driver.find_element(By.XPATH, "//*[@id='user_name']")
    WebDriverWait(driver, 10).until(EC.element_to_be_clickable((By.XPATH, "//*[@id='user_name']"))).send_keys("허문이")
    # usrname.send_keys("허문이")
    # year_menu = driver.find_element(By.XPATH, "//*[@id='birth_yyyy']")
    # select = Select(year_menu)
    # select.select_by_value('2000')
    # month_menu = driver.find_element(By.XPATH, "//*[@id='birth_mm']")
    # select = Select(month_menu)
    # select.select_by_value('08')
    # day_menu = driver.find_element(By.XPATH, "//*[@id='birth_dd']")
    # select = Select(day_menu)
    # select.select_by_value('07')
    actions = ActionChains(driver)
    actions.send_keys(Keys.ENTER)
    actions.perform()
    time.sleep(10)

    html = driver.page_source
    soup = BeautifulSoup(html, 'html.parser')
    r = soup.find(class_='one_m')
    gender = r.find(class_='gender')
    name = r.find(id_='sjms_side')
    dd = r.findAll("dd")
    birth = r.find_all("td")
    content = soup.find(class_="content").find(class_="cont").find("dd").get_text()
    res=""
    for i in birth:
        res += i.find("p").get_text()
        res += ": "
        res += i.find("img").attrs["src"]
        res += "\n"
    res += content.strip()
    driver.quit()
    return res