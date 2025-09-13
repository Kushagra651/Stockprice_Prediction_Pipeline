import logging
import os
from datetime import datetime
import sys

#file name format for the logging files
LOG_FILE = f"{datetime.now().strftime('%m_%d_%Y_%H_%M_%S')}.log"
log_path = os.path.join(os.getcwd(), "logs", LOG_FILE)

#creating the log dir 
os.makedirs(os.path.dirname(log_path),exist_ok=True)

#log message format for the log file 
logging.basicConfig(
    filename=log_path,
    format="[%(asctime)s] %(lineno)d %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)

#create an instance to use in other files also 
logging = logging.getLogger(__name__)


#start loggign
if __name__=="__main__":
    logging.info("log file is working and start logging")

