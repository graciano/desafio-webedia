Desafio Webedia Graciano
========================

Fiz o miniblog em [laravel](laravel.com), usando sass e o [breakpoint](http://breakpoint-sass.com/) para media queries. Todo o resto do estilo foi feito do zero, usando flexbox (sabendo das limitações do flexbox no ie11 e usando só o que é suportado).
Neste documento, um guia de como instalar a aplicação (em ambiente de desenvolvimento) e usá-la.

## Instalação
**Requerimentos:**
 - git
 - php7.0+
 - mysql/mariadb (ou outro SGBD compatível com laravel)
 - [composer](https://getcomposer.org/)
 - [opcional] [npm](https://www.npmjs.com/)
 - [opcional] [yarn](https://yarnpkg.com/en/)

**Passo a passo**
 - Primeiro clonar o projeto:
   - `git clone https://github.com/graciano/desafio-webedia.git`
   - Ou `git@github.com:graciano/desafio-webedia.git` para usuários de ssh.
 - Instalar dependências do projeto
  - `composer install`
  - [opcional] `yarn`
 - Caso queira mexer no código sass, rodar `yarn watch`
 - Criar um banco e colocar as informações de acesso ao mesmo no .env, nos campos `DB_CONNECTION`, `DB_DATABASE`, etc
  - Depois, `php artisan migrate` para criar as tabelas no banco
  - [opicional] `php artisan db:seed` para alimentar o banco com posts aleatórios.
 - adicionar chaves da [api do google](https://console.developers.google.com) no arquivo .env nos campos `GOOGLE_CLIENT_ID` e `GOOGLE_CLIENT_SECRET`

E finalmente, para rodar o projeto, `php artisan serve` e acessar em [localhost:8000](http://localhost:8000)

## Usando

Para fazer login, basta acessar a página de login em [localhost:8000/login](http://localhost:8000/login) que depois você será redirecionado para a dashboard, em [http://app.dev:8000/dashboard](http://app.dev:8000/dashboard). 

Na dashboard, há um cabeçalho com links para o site público, a home da dashboard e para criar um novo post. Além disso, são listados os posts para serem alterados ou excluídos.
 ![print](http://i.imgur.com/ko2GAnM.png)


Na página de escrever um post (tanto novo quanto editar), devem-se informar os campos de lead, excerpt, preiew, etc para criação dos cards. Se os mesmos não forem informados, são preenchidos automaticamente com conteúdo do post até que sejam alterados pelo usuário.
![print](http://i.imgur.com/7KIyNKl.png)
 
