from pymemcache.client.base import Client
import ast

print("Hello world from python!!")

client = Client('host.docker.internal:11211')
client.set('some_key', 'some_value')
result = client.get('some_key')

print(result)
print(type(result))
print(str(result))
print(result.decode())


client.set('python_message', { 'val': 'my string value' })
