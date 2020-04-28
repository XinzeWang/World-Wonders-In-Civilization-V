var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
  {
    name: "Cloud's Rest1",
    image:
      "https://admission.gatech.edu/sites/default/files/uploads/images/superblock_images/3-in-a-row-2.jpg",
    description: "Computer of college"
  },
  {
    name: "Cloud's Rest2",
    image:
      "https://admission.gatech.edu/sites/default/files/uploads/images/superblock_images/3-in-a-row-2.jpg",
    description: "Computer of college"
  },
  {
    name: "Cloud's Rest3",
    image:
      "https://admission.gatech.edu/sites/default/files/uploads/images/superblock_images/3-in-a-row-2.jpg",
    description: "Computer of college"
  }
];

function seedDB() {
  //Remove all campgrounds
  Campground.remove({}, function(err) {
    //   if (err) {
    //     console.log(err);
    //   }
    //   console.log("removed campgrounds!");
    //   Comment.remove({}, function(err) {
    //     if (err) {
    //       console.log(err);
    //     }
    //     console.log("removed comments!");
    //     //add a few campgrounds
    //     data.forEach(function(seed) {
    //       Campground.create(seed, function(err, campground) {
    //         if (err) {
    //           console.log(err);
    //         } else {
    //           console.log("added a campground");
    //           //create a comment
    //           Comment.create(
    //             {
    //               text: "This place is great, but I wish there was internet",
    //               author: "Homer"
    //             },
    //             function(err, comment) {
    //               if (err) {
    //                 console.log(err);
    //               } else {
    //                 campground.comments.push(comment);
    //                 campground.save();
    //                 console.log("Created new comment");
    //               }
    //             }
    //           );
    //         }
    //       });
    //     });
    //   });
  });
  //add a few comments
}

// function seedDB() {
//   // remove all campgrounds
//   Campground.remove({}, function(err, campground) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log("remove campgrounds!");
//       // add a few campgrounds
//       data.forEach(function(seed) {
//         Campground.create(seed, function(err, data) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log("added a campground!");
//             //create a comment
//             Comment.create(
//               { text: "This place is great", author: "Homer" },
//               function(err, comment) {
//                 if (err) {
//                   console.log(err);
//                 } else {
//                   campground.comments.push(comment);
//                   campground.save();
//                   console.log("created a new comment!");
//                 }
//               }
//             );
//           }
//         });
//       });
//     }
//   });
// }

module.exports = seedDB;
