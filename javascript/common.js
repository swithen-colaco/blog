var top2BlogsText = '[{"title" : "Darkness", "title_description" : "short description about the blog", "img" : "images/img_nature_wide.jpg", "img_alt" : "image description", "blog_preview" : "Darkness is tranquil. </br>A cozy corner for the broken hearted.</br>Darkness comes with a sense of peace.", "create_date" : "2 Jan 2018"}, {"title" : "Title 2", "title_description" : "", "img" : "images/img_snow_wide.jpg",  "img_alt" : "image description 2", "blog_preview" : "Bye world...", "create_date" : "10 Apr 2017"}]';
$(document).ready(function(){
  setTimeout(filldata, 2000);
});

function filldata(){
  var top2Blogs = JSON.parse(top2BlogsText);
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
}
