const profileCard = (data) => {
    return (`
    <div class="card">
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src=${data.avatar_url} alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">${data.name ? data.name : "-"}</p>
        <p class="subtitle is-6"><a href=${data.html_url}>@${data.login}</a></p>
      </div>
    </div>

    <div class="content">
      ${data.bio ? data.bio + "." : ""}
       <p class="subtitle is-6"></p>
      <br />
      <time datetime="2016-1-1">${data.created_at}</time>
    </div>
  </div>
  <footer class="card-footer">
    <div class="card-footer-item">
       <p class="heading">Repos</p>
      <p class="title">${data.public_repos}</p></div>
    <div class="card-footer-item"><p class="heading">Followers</p>
      <p class="title">${data.followers}</p></div>
    <div class="card-footer-item"><p class="heading">Following</p>
      <p class="title">${data.following}</p></div>
  </footer>
</div>
    `)
}

const emptyCard = () => {
    return (`
    <div class="column card">
  <div class="card-content">
    <div class="content">
      No data.
    </div>
  </div>
</div>
    `)
}
