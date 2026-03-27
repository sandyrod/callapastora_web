# Usar NGINX puro en Alpine (extremadamente ligero, ~10MB)
FROM nginx:alpine

# Copiar la configuración personalizada de NGINX para permitir URLs amigables
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copiar los ficheros estáticos al directorio público de NGINX
COPY . /usr/share/nginx/html/

# Exponer el puerto por defecto de HTTP
EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
