# Projeto

Descrição do projeto.

## Branches Workflow

As branches serão divididas em:

- **prod:** Para produção. Só pode fazer merge com pull request.
- **main:** Para homologação e teste. Só pode fazer merge com pull request.
- **feature/\*:** Para desenvolvimento. Acompanha alguma descrição sobre a feature, exemplo: **feature/navbar**, **feature/register-system**.
- **bugfix/\*:** Para conserto de bugs. Acompanha alguma descrição sobre o bugfix, exemplo: **bugfix/db-timeout-error**, **bugfix/register-gmail-issue**.
- **hotfix/\*:** Para conserto de bugs urgentes, relacionados a produção. Acompanha alguma descrição sobre o hotfix, exemplo: **hotfix/db-connection-error**, **hotfix/user-login-issue**.
- **docs/\*:** Para documentação. Acompanha alguma descrição sobre a documentação, exemplo: **docs/db-orm**, **docs/login-test**.

## Uso e configuração

Para utilizar o projeto é necessário ter o [Docker](https://www.docker.com/) instalado.

Utilize o .env.dist para criar sua .env com as variáveis de ambiente.

Para inicializar o docker compose de desenvolvimento utilize:

```bash
docker compose up --build
```

E o de produção:

```bash
docker compose -f docker-compose.prod.yml up --build
```
