FROM sfoxdev/chrome-vnc-rdp
RUN apt update; exit 0
RUN apt install curl -y
RUN apt install sudo -y
RUN curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -; exit 0
RUN apt-get install -y nodejs
RUN npm i playwright
RUN npm i -D playwright
RUN export DISPLAY=:1.0
ENV DISPLAY=:1.0
COPY test_amazon.js root/
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf
ENTRYPOINT ["/bin/bash", "/entrypoint.sh"]
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
