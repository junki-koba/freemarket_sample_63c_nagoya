$(document).on('turbolinks:load', ()=> {
  $(function(){
    $('form').on('change', 'input[type="file"]','#image' ,function(e) {
      var file = e.target.files[0],
      reader = new FileReader(),
      $preview = $(".preview");
      t = this;
      if(file.type.indexOf("image") < 0){
        return false;
      }
      reader.onload = (function(file) {
        return function(e) {
          $preview.append($('<img>').attr({
            src: e.target.result,
            width: "150px",
            class: "preview",
            title: file.name
          }));
        };
      })(file);
      reader.readAsDataURL(file);
      var new_image = $(`<input multiple= "multiple" name="product_images[image][]"  type="file" id="image" data: {image:*}>`);
      $(".image_box").prepend(new_image);
    });
  });
});

// 参考記事
// $(document).on('turbolinks:load', ()=> {
//   // 画像用のinputを生成する関数
//   const buildFileField = (index)=> {
//     const html = `<div data-index="${index}" class="js-file_group">
//                     <input class="js-file" type="file"
//                     name="product[images_attributes][${index}][src]"
//                     id="#image${index}"><br>
//                     <div class="js-remove">削除</div>
//                   </div>`;
//     return html;
//   }

//   // file_fieldのnameに動的なindexをつける為の配列
//   let fileIndex = [1,2,3,4,5,6,7,8,9,10];

//   $('form').on('change', 'input[type="file"]','#image', function(e) {
//     // fileIndexの先頭の数字を使ってinputを作る
//     $('.image-box').append(buildFileField(fileIndex[0]));
//     fileIndex.shift();
//     // 末尾の数に1足した数を追加する
//     fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
//   });

//   $('form').on('click', '.js-remove', function() {
//     $(this).parent().remove();
//     // 画像入力欄が0個にならないようにしておく
//     if ($('.js-file').length == 0) $('#image-box').append(buildFileField(fileIndex[0]));
//   });
// });




// $(document).on('turbolinks:load', ()=> {
//   var new_image = $(`<input multiple= "multiple" name="product_images[image][]"  type="file" id="image">`);
//   $(".image_box").prepend(new_image);
//   const buildFileField = (post)=> {
//     const html = `<div data-index="${post}" class="js-file_group">
//                     <input class="js-file" type="file"
//                     name="product[images_attributes][${post}][src]"
//                     id="#image${post}"><br>
//                     <div class="js-remove">削除</div>
//                   </div>`;
//     return html;
//   }
//   let fileIndex = [1,2,3,4,5,6,7,8,9,10];

//   $(function(){
//     $('form').on('change', 'input[type="file"]','#image' ,function(e) {
//       var file = e.target.files[0],
//       reader = new FileReader(),
//       $preview = $(".preview");
//       t = this;
//       if(file.type.indexOf("image") < 0){
//         return false;
//       }
//       reader.onload = (function(file) {
//         return function(e) {
//           // $preview.empty();
//           $preview.append(buildFileField(fileIndex[0]));
//           fileIndex.shift();
//           fileIndex.push(fileIndex[fileIndex.length - 1] + 1)
//           $preview.append($('<img>').attr({
//             src: e.target.result,
//             width: "150px",
//             class: "preview",
//             title: file.name
//           }));
//         };
//       })(file);
//       reader.readAsDataURL(file);
//       // var new_image = $(`<input multiple= "multiple" name="product_images[image][]"  type="file" id="image">`);
//       // $(".image_box").prepend(new_image);
//     });
//     $('form').on('click', ".preview", function() {
//       $(this).parent().remove();
//       if ($(".previewa").length == 0) $('.image-box').append(buildFileField(fileIndex[0]));
//     });
//   });
// });