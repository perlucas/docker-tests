FROM python:3

ARG PYTHON_WORKING_DIR

WORKDIR $PYTHON_WORKING_DIR

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD python main.py