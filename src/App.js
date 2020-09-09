import React from "react";
// CSS
import "./App.css";
// Components
import UserAddForm from "./components/UserAddForm";
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
// Data Base
import users from "./utils/users.json";
// React Router
import { BrowserRouter, Switch, Route } from "react-router-dom";
// Pages
import Layout from "./components/Layout";
import About from "./components/pages/About";
import Page404 from "./components/pages/Page404";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: "#fff",
      color: "#000",
      posts: [],
      users: [],
      toggleUsers: true,
      togglePosts: false,
      usersBtn: "Ascunde utilizatori",
      postsBtn: "Afișează postări",
      scrollBtnVizibility: false,
    };
  }

  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     data = data.filter((user) => user.id < 4);
    //     data.forEach((user) => {
    //       user.isGoldClient = false;
    //     });
    //     this.setState({ users: data });
    //   });

    // Update state -> Users
    const filteredUsers = users.filter((user) => user.id < 11);
    filteredUsers.forEach((user) => (user.isGoldClient = true));
    this.setState({ users: filteredUsers });

    // Extracting Posts & update state
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((allPosts) => {
        allPosts = allPosts.filter((post) => post.id < 8);
        this.setState({ posts: allPosts });
      });

    // Toggle Scroll Top Button Visibility
    document.addEventListener("scroll", (e) => {
      this.toggleVisibility();
    });
  }

  // Change Color Buttons
  changeColor(event) {
    this.setState({ background: event.target.value });
  }

  changeTextColor(event) {
    this.setState({ color: event.target.value });
  }

  // Set Users Id
  getMaxId(users) {
    let maxId = 0;

    users.forEach((user) => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  // Toggle Users & Posts Lists
  handleToggleUsers() {
    this.state.toggleUsers
      ? this.setState({ toggleUsers: false, usersBtn: "Afișează utilizatori" })
      : this.setState({ toggleUsers: true, usersBtn: "Ascunde utilizatori" });
  }

  handleTogglePosts() {
    this.state.togglePosts
      ? this.setState({ togglePosts: false, postsBtn: "Afișează postări" })
      : this.setState({ togglePosts: true, postsBtn: "Ascunde postări" });
  }

  // Submit Form
  submitAddForm(event, name, email, salary, isGoldClient) {
    event.preventDefault();

    this.setState((prevState) => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            salary,
            isGoldClient,
          },
        ],
      };
    });
  }

  // Delete User
  handleDeleteUser(id) {
    this.setState((previousUsersState) => {
      return {
        users: previousUsersState.users.filter((user) => user.id !== id),
      };
    });
  }

  // Delete Post
  handleDeletePost(id) {
    this.setState((previousPostsState) => {
      return {
        posts: previousPostsState.posts.filter((post) => post.id !== id),
      };
    });
  }

  // Scroll To Top Button
  toggleVisibility() {
    if (window.pageYOffset > 200) {
      this.setState({ scrollBtnVizibility: true });
    } else {
      this.setState({ scrollBtnVizibility: false });
    }
  }

  handleScrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <div
                  className="app"
                  style={{
                    background: this.state.background,
                    color: this.state.color,
                  }}
                >
                  <h1>Admin panel - Proiectul 1</h1>

                  <div className="form-container">
                    <div className="form-content">
                      {/* Form */}
                      <UserAddForm
                        submitAddForm={(
                          event,
                          name,
                          email,
                          salary,
                          isGoldClient
                        ) =>
                          this.submitAddForm(
                            event,
                            name,
                            email,
                            salary,
                            isGoldClient
                          )
                        }
                      />

                      <div className="line-separator"></div>

                      {/* Buttons */}
                      <div className="btn-container">
                        <label htmlFor="bg-color">
                          Schimbă culoarea fundalului{" "}
                        </label>
                        <input
                          type="color"
                          onChange={(event) => this.changeColor(event)}
                        />

                        <label htmlFor="text-color">
                          Schimbă culoarea textului
                        </label>
                        <input
                          type="color"
                          onChange={(event) => this.changeTextColor(event)}
                        />

                        {/* <label htmlFor="show-users">Afișează Utilizatori</label> */}
                        <input
                          type="button"
                          value={this.state.usersBtn}
                          onClick={() => this.handleToggleUsers()}
                        />

                        {/* <label htmlFor="show-posts">Afișează Postări</label> */}
                        <input
                          type="button"
                          value={this.state.postsBtn}
                          onClick={() => this.handleTogglePosts()}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Lists */}
                  <div className="lists">
                    {this.state.toggleUsers ? (
                      <UserList
                        users={this.state.users}
                        handleDeleteUser={(id) => this.handleDeleteUser(id)}
                      />
                    ) : null}

                    {this.state.togglePosts ? (
                      <PostList
                        posts={this.state.posts}
                        handleDeletePost={(id) => this.handleDeletePost(id)}
                      />
                    ) : null}
                  </div>

                  <ScrollToTopBtn
                    scrollBtnVizibility={this.state.scrollBtnVizibility}
                    handleScrollToTop={() => this.handleScrollToTop()}
                  />
                </div>
              )}
            />

            <Route
              path="/despre"
              render={() => (
                <About
                  scrollBtnVizibility={this.state.scrollBtnVizibility}
                  handleScrollToTop={() => this.handleScrollToTop()}
                />
              )}
            />

            <Route path="*" component={Page404} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
