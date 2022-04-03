FROM python:3

ARG PYTHON_WORKING_DIR

WORKDIR $PYTHON_WORKING_DIR

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

RUN chmod +x wait.sh start.sh

# START THIS CONTAINER ONLY IF DB SERVICE IS AVAILABLE
CMD ["./wait.sh" , "db:3306" , "--strict" , "--timeout=60" , "--" , "./start.sh"]