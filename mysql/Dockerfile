FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

COPY start.sql /docker-entrypoint-initdb.d/
