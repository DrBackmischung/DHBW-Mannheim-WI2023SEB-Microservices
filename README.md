# DHBW-Mannheim-WI2023SEB-Microservices
<<<<<<< HEAD

**Services & Ports**
- Product Service (Port 3001)
  - GET /products
  - GET /products/:id
- User Service (Port 3002)
  - GET /users
  - GET /users/:id
- Order Service (Port 3003)
  - GET /orders
  - GET /orders/:id

**API Gateway (Node.js, Port 3000)**
- GET /products (weitergeleitet an Product Service)
- GET /users (weitergeleitet an User Service)
- GET /orders (weitergeleitet an Order Service)

**Architektur-Erklärung:**
- **Microservices**: Kleine, eigenständige Dienste, die jeweils für eine spezifische Domäne zuständig sind.
- **API Gateway**: Zentraler Einstiegspunkt, der Anfragen an die passenden Services weiterleitet.
- Vorteil: Unabhängige Entwicklung, einfache Skalierung, klare Verantwortlichkeiten.
=======
DHBW-Mannheim-WI2023SEB-Microservices

Products (/products):

GET /products

GET /products/1

GET /products/search/Sneakers

GET /categories

Users (/users):

GET /users

GET /users/1

GET /users/search/alice

GET /users/emails

Orders (/orders):

GET /orders

GET /orders/1

GET /orders/status/shipped

GET /orders/user/1
>>>>>>> 82d37e72c644e921f03359cf618f6f325853a47b
