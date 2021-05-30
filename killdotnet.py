import os

os.system("killall -9 inventory")
os.popen('nohup dotnet inventoryg.dll &')