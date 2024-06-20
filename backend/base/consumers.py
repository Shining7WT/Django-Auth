import json
import math
import time
import asyncio
from datetime import datetime

from channels.generic.websocket import WebsocketConsumer


class AppConsumer(WebsocketConsumer):

    def __init__(self, *args, **kwargs):
        super().__init__(args, kwargs)
        self.user = None

    def connect(self):
        # connection has to be accepted
        self.accept()

        # send connection status
        self.sendMessage({"type": "connStatus", "status": True})
        
    def disconnect(self, close_code):
        # send connection status
        self.sendMessage({"type": "connStatus", "status": False})

    def receive(self, text_data=None, bytes_data=None):
        text_data_json = json.loads(text_data)
        string_number = text_data_json["number"]

        number = int(string_number)
        power_of_ten = math.floor(math.log10(abs(number)))
        time.sleep(10)
        self.sendMessage({"type": "calcResult", "value": str(power_of_ten)})

    def sendMessage(self, obj):
        return self.send(text_data=json.dumps(obj))
