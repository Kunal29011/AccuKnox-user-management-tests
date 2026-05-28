import psutil

cpu = psutil.cpu_percent(interval=1)

print("System Health Report")
print("CPU Usage:", cpu)

if cpu > 80:
 print("ALERT: High CPU Usage")
else:
 print("System is Healthy")

