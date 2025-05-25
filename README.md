# DHBW-Mannheim-WI2023SEB-Microservices

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