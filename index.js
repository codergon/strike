$(document).ready(function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    console.log("good");
    $(".table_inn").removeClass("hide_table");
    $(".close_table").css({ display: "none" });
  } else {
    $(".item").hover(
      function () {
        $(this).css({ borderColor: "red" });
      },
      function () {
        $(this).css({ borderColor: "#000" });
      }
    );

    $(".show_all").click(function () {
      $(".table_inn").toggleClass("hide_table");
    });

    $(".close_table").click(function () {
      $(".table_inn").toggleClass("hide_table");
    });

    $(window).on("keydown", function (e) {
      e.preventDefault();
      $(".pressed").css({ fontSize: "13vw" });
      $(".e_code").html(e.code);
      $(".e_which").html(e.keyCode);
      $(".pressed").html(e.keyCode);
      if (e.keyCode == 32) {
        $(".e_key").html("Space Key");
      } else {
        $(".e_key").html(e.key);
      }
    });

    $(".item").click(function () {
      $(this).find(".after").animate({ left: "0%" }, 300);
      setTimeout(() => {
        $(this).find(".after").animate({ left: "-100%" }, 400);
      }, 800);
      const copyToClipboard = (str) => {
        const el = document.createElement("textarea");
        el.value = str;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      };
      copyToClipboard($(this).find(".copycode").text().slice(0, -3));
    });
  }
});
