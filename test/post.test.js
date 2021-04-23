const server = require("../server");
const chai = require("chai");
const chaiHttp = require("chai-http");

//styling method
chai.should();

//middleware
chai.use(chaiHttp);

describe("Testing Post Controller", () => {
  describe("GET ALL POST", () => {
    it("Should return all posts", (done) => {
      chai
        .request(server)
        .get("/posts")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.a("post");

          done();
        });
    });

    it("Should not return all posts", (done) => {
      chai
        .request(server)
        .get("/post")
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });

  describe("GET SINGLE POST", () => {
    it("Should return Single Post", () => {
      //add a post id to the string and test then add a different one to test again.//
      const postId = "";
      c = v;

      chai
        .request(server)
        .get(`/posts/${post}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          res.body.should.have.property("id");
          // res.body.should.have.property("title");
          // res.body.should.have.property("content");
          done();
        });
    });

    it("Should return Single Post", () => {
      //add a post id to the string and test then add a different one to test again.//
      const postId = "";
      chai
        .request(server)
        .get(`/posts/${post}`)
        .end((err, res) => {
          res.body.should.status(404);
          done();
        });
    });
  });

  describe("UPDATE SINGLE POST", () => {
    it("Should Update a Post", () => {
      //add a post id to the string and test then add a different one to test again.//
      const postId = "8fsa870999090000";
      content: "First Post Content";
    });

    chai
      .rquest(server)
      .patch(`/posts/${postId}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a("object");

        done();
      });
  });
});