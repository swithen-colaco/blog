var top2BlogsText = '[{"title" : "Darkness", "title_description" : "short description about the blog", "img" : "images/img_nature_wide.jpg", "img_alt" : "image description", "blog_preview" : "Lorem ipsum dolor sit amet,</br>consectetur adipiscing elit,</br>sed do eiusmod tempor incididunt ut", "create_date" : "2 Jan 2018", "link": "/darkness.html"}, {"title" : "Title 2", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 2", "blog_preview" : "Bye world...", "create_date" : "10 Apr 2017"} , {"title" : "Title 3", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 3", "blog_preview" : "Byeee world...", "create_date" : "10 Apr 2019"} , {"title" : "Title 4", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 4", "blog_preview" : "Bddsye world...", "create_date" : "10 Apr 2018"}, {"title" : "Title 5", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 4", "blog_preview" : "Bddsye world...", "create_date" : "10 Apr 2018"}, {"title" : "Title 6", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 4", "blog_preview" : "Bddsye world...", "create_date" : "10 Apr 2018"}, {"title" : "Title 7", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 4", "blog_preview" : "Bddsye world...", "create_date" : "10 Apr 2018"}, {"title" : "Title 8", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 4", "blog_preview" : "Bddsye world...", "create_date" : "10 Apr 2018"}]';

var top2Blogs;
var i = 1;
var maxBlog;
$(document).ready(function(){
  top2Blogs = JSON.parse(top2BlogsText);
  setTimeout(fillBlog, 2000);
});


function fillBlog(){
//var top2Blogs = JSON.parse(top2BlogsText);
  $(".placeholder_blog_title").removeClass("placeholder_blog_title placeholder");
  $(".placeholder-blog-date").removeClass("placeholder-blog-date placeholder");
  $("#placeholder-blog-img").removeClass("placeholder-blog-img placeholder");
  $(".placeholder-blog-preview").removeClass("placeholder-blog-preview placeholder");
  $(".read-more-btn").css("visibility", "visible");

  // first latest blog
  $("#latest-blog1-title").text(top2Blogs[0].title);
  if(top2Blogs[0].title_description !== '') {
      $("#latest-blog1-description").text(top2Blogs[0].title_description + ', ');
  }
  $("#latest-blog1-date").text(top2Blogs[0].create_date);
  $("#latest-blog1-img").attr({
      "src" : top2Blogs[0].img,
      "alt" : top2Blogs[0].img_alt
  });
  $("#latest-blog1-preview").html(top2Blogs[0].blog_preview);

  // second latest blog
  $("#latest-blog2-title").text(top2Blogs[1].title);
  if(top2Blogs[1].title_description !== '') {
    $("#latest-blog2-description").text(top2Blogs[1].title_description + ', ');
  }
  $("#latest-blog2-date").text(top2Blogs[1].create_date);
  $("#latest-blog2-img").attr({
          "src" : top2Blogs[1].img,
          "alt" : top2Blogs[1].img_alt
      });
  $("#latest-blog2-preview").html(top2Blogs[1].blog_preview);

  //fill mini
  fillMiniBlog(1);
}

function fillMiniBlog(value) {
  console.log(i + " "+ value);
  console.log(top2Blogs.length - 2);
  i = i + value;
  if(i < top2Blogs.length - 2  && i > 1) {
    j = i;
  $("#latest-blog3-title").text(top2Blogs[j].title);
  $("#latest-blog3-img").attr({
          "src" : top2Blogs[j].img,
          "alt" : top2Blogs[j].img_alt
      });
  $("#latest-blog4-title").text(top2Blogs[j+1].title);
  $("#latest-blog4-img").attr({
          "src" : top2Blogs[j].img,
          "alt" : top2Blogs[j].img_alt
      });
  $("#latest-blog5-title").text(top2Blogs[j+2].title);
  $("#latest-blog5-img").attr({
          "src" : top2Blogs[j].img,
          "alt" : top2Blogs[j].img_alt
      });
}
if(i >= top2Blogs.length - 3) {
  $('#next-button').prop('disabled', true);
}
else {
  $('#next-button').prop('disabled', false);
}

if(i <= 2) {
  $('#previous-button').prop('disabled', true);
}
else {
  $('#previous-button').prop('disabled', false);
}
}

$("#next-button").click(function(){
  fillMiniBlog(1);
});

$("#previous-button").click(function(){
  fillMiniBlog(-1);
});
