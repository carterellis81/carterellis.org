FROM python:3.12-alpine
WORKDIR /usr/local/app

# Install the application dependencies
COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy in the source code
COPY . ./
EXPOSE 5000

CMD [ "python", "./main.py" ]