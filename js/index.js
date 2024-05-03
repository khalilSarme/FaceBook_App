const FacebookNavbarBrand = () => {
  return <a className="navbar-brand">facebook</a>;
};

const FacebookNavbarToggler = () => {
  return (
    <button className="navbar-toggler">
      <span className="fas fa-bars"></span>
    </button>
  );
};

const FacebookNavbarButton = () => {
  return (
    <>
      <div className="navbar_buttons">
        <button className="btn">
          <i className="fas fa-search"></i>
        </button>
        <button className="btn">
          <i className="fab fa-facebook-messenger"></i>
        </button>
      </div>
    </>
  );
};

const FacebookNavbarLinks = () => {
  return (
    <>
      <div className="website_tabs ms-auto border_div">
        <ul className="nav-list">
          <li className="nav-list-item">
            <a className="nav-list-link active" href="#">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="#">
              <i className="fas fa-user-friends"></i>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="#">
              <i className="fas fa-user-circle"></i>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="#">
              <i className="fas fa-users"></i>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="#">
              <i className="fas fa-play-circle"></i>
            </a>
          </li>
          <li className="nav-list-item">
            <a className="nav-list-link" href="#">
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const NavbarLinks = () => {
  return (
    <>
      <div className="navbar-collapse" id="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link">
              <h6>Home</h6>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <h6>About</h6>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link">
              <h6>Contact</h6>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <>
        <FacebookNavbarBrand />
        <FacebookNavbarButton />
      </>
      <FacebookNavbarLinks />
    </>
  );
};

ReactDOM.render(<Navbar />, document.querySelector("#navbar_container"));
const NavbarLinkGroup = document.querySelectorAll(".nav-list-link");
NavbarLinkGroup.forEach(e => {
  e.addEventListener('click', () => {
    if(!e.className.includes('active')) {
      document.querySelector('.active').className = 'nav-list-link';
      e.className = 'nav-list-link active';
    }
  });
});

const FacebookStory = () => {
  return (
    <>
      <i className="fas fa-user-circle user_profile_image"></i>
      <img className="story_image" src="./images/image_a1.jpg" alt="" />
      <span className="user_name_story">Khalil</span>
    </>
  );
};

const addNewStory = () => {
  const newStoryContainer = document.createElement("div");
  newStoryContainer.className = "story";
  document
    .querySelector("#stories_slider_container")
    .appendChild(newStoryContainer);
  ReactDOM.render(<FacebookStory />, newStoryContainer);
};
(function addStories() {
  for(let i = 0 ; i < 15 ; i++) {
    addNewStory();
  }
})();

const PostHeader = () => {
  return (
    <>
      <div className="post_header">
        <div className="col-12">
          <div className="post_user_name">
            <i className="fas fa-user-circle user_name_image"></i>
            <div className="user_name_info">
              <span className="user_name">Khalil Sarme</span>
              <span className="post_time">2d</span>
            </div>
          </div>
          <button className="btn more_options" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
};
const PostContent = () => {
  return (
    <>
      <div className="post_content">
        <p className="post_content_text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum,
          dolor sit amet consectetur adipisicing elit.
        </p>
        <img className="post_content_image" src="images/image_a1.jpg" alt="" />
      </div>
    </>
  );
};

const PostReactions = () => {
  return (
    <>
      <div className="post_reactions">
        <span className="number_of_reactions">
          <i className="fa fa-heart"></i>
          2.1K
        </span>
        <div className="comments_shares">
          <span className="number_of_comments">12K Comment</span>.
          <span className="number_of_shares">1K Shares</span>
        </div>
      </div>
      <div className="post_actions">
        <button className="btn button_reaction">
          <label>
            <i className="far fa-thumbs-up"></i>
            <span>Like</span>
          </label>
        </button>
        <button className="btn button_reaction">
          <label>
            <i className="far fa-comment"></i>
            <span>Comment</span>
          </label>
        </button>
        <button className="btn button_reaction">
          <label>
            <i className="fas fa-share"></i>
            <span>Share</span>
          </label>
        </button>
      </div>
    </>
  );
};

const NewPost = () => {
  return (
    <>
      <PostHeader />
      <PostContent />
      <PostReactions />
    </>
  );
};

const FacebookPostCreation = () => {
  return (
    <>
      <form className="create_new_post_form" action="" method="post">
        <button className="btn user_profile_image" type="button">
          <i className="fa fa-user-circle"></i>
        </button>
        <input
          type="text"
          name="new_post_text_content"
          id="new_post_text_content"
          placeholder="What's on your mind?"
        />
        <button className="btn add_post_image" type="button">
          <i className="fa fa-images"></i>
        </button>
      </form>
    </>
  );
};

ReactDOM.render(
  <FacebookPostCreation />,
  document.querySelector("#create_post_col")
);

const addNewPost = () => {
  const newPostContainer = document.createElement("div");
  newPostContainer.className = "post";
  document.querySelector("#main_col").appendChild(newPostContainer);
  ReactDOM.render(<NewPost />, newPostContainer);
};

setInterval(addNewPost, 3000);

