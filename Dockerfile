# Usar NGINX puro en Alpine (extremadamente ligero, ~10MB)
FROM nginx:alpine

# Copiar como plantilla para que Nginx inyecte la variable de entorno
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# Copiar los ficheros estáticos al directorio público de NGINX
COPY . /usr/share/nginx/html/

# Exponer el puerto por defecto de HTTP
EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
