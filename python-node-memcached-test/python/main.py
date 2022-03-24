from pymemcache.client.base import Client
import ast
import time
import os

time.sleep(3)

print("Listening for remote clock from Python!")

client = Client(f"{os.environ['MEMCACHED_HOST']}:{os.environ['MEMCACHED_PORT']}")

last_time = None

while True:

    result = client.get('remote-clock')

    if result is None:
        break

    time_text = result.decode()

    if last_time != time_text:
        print(f"Got a new update!: {time_text}")
        last_time = time_text

    time.sleep(1)

print("Finished listening for remote clock.")