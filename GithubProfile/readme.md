api_url : https://api.github.com/

### Search
<ul>
<li>
<strong>Search repositories</strong> 
<ul>
<li>GET /search/repositories</li>
<li>queries : q=string, sort=string{stars,forks,updated..}, order=string{desc,asc}</li>
</ul>
</li>
<li>
<strong>Get repositories by ID</strong> 
<ul>
<li>GET /repositories/:id</li>
</ul>
</li>
<li>
<strong>Search users</strong> 
<ul>
<li>GET /search/users</li>
<li>queries : q=string, sort=string{followers,repositories,joined..}, order=string{desc,asc}</li>
</ul>
</li>
<li>
<strong>Get user by id</strong> 
<ul>
<li>GET user/:id</li>
</ul>
</li>
<li>
<strong>Search topics</strong> 
<ul>
<li>GET /search/topics</li>
<li>queries : q=string</li>
</ul>
</li>
<li>
<strong>Get topics by id</strong> 
<ul>
<li>GET /topics/:id</li>
</ul>
</li>
</ul>

###  Constructing a search query
q=SEARCH_KEYWORD_1+SEARCH_KEYWORD_N+QUALIFIER_1+QUALIFIER_N

eg : q=GitHub+Octocat+in:readme+user:defunkt

### Layout
![imgfirst](./../images/gitProfile.png)
<hr/>

### Colors:
<ul>
<li>#2A223B</li>
<li>#C89F84</li>
<li>#10B9C9</li>
<li>#4E6D85</li>
<li>#804120</li>
<li>#8B8CA4</li>
</ul>
