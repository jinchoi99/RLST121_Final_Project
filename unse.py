from bs4 import BeautifulSoup
from urllib.parse import quote_plus
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver import ActionChains
from selenium.webdriver.common.touch_actions import TouchActions
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import Select
import time

def all():
    url = "https://www.unsin.co.kr/unse/saju/total/form"
    driver_loc = "/Users/jchoi/Desktop/crawling/chromedriver"
    s = Service(driver_loc)
    chrome_options = Options()
    # headless, run without opening browser
    chrome_options.add_argument("headless")
    chrome_options.add_experimental_option("detach", True)
    driver = webdriver.Chrome(service=s, options=chrome_options)

    driver.get(url)
    usrname = driver.find_element(By.XPATH, "//*[@id='user_name']")
    usrname.send_keys("허문이")
    year_menu = driver.find_element(By.XPATH, "//*[@id='birth_yyyy']")
    select = Select(year_menu)
    select.select_by_value('2000')
    month_menu = driver.find_element(By.XPATH, "//*[@id='birth_mm']")
    select = Select(month_menu)
    select.select_by_value('08')
    day_menu = driver.find_element(By.XPATH, "//*[@id='birth_dd']")
    select = Select(day_menu)
    select.select_by_value('07')
    actions = ActionChains(driver)
    actions.send_keys(Keys.ENTER)
    actions.perform()
    time.sleep(3)

    html = driver.page_source
    # print(html)
    soup = BeautifulSoup(html, 'html.parser')
    r = soup.find(class_='one_m')
    gender = r.find(class_='gender')
    name = r.find(id_='sjms_side')
    dd = r.findAll("dd")
    birth = r.find_all("td")
    content = soup.find(class_="content").find(class_="cont").find("dd").get_text()
    # print(birth)
    # title_html = soup.find(class_='group_service NM_FAVORITE_ALL_LY').find_all(class_='list_service')[4].select(".service_data")
    res=""
    for i in birth:
        res += i.find("p").get_text()
        res += ": "
        res += i.find("img").attrs["src"]
        res += "\n"
    res += content.strip()

    # with open("imgresult.txt", "w", encoding="utf8") as f:
    #     f.write(res)
    driver.quit()
    return res