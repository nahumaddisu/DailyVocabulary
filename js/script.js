const mobileMenuButton =
    document.getElementById("mobileMenuButton");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenuButton && mobileNav) {

    mobileMenuButton.addEventListener(
        "click",
        () => {

            const isOpen =
                mobileNav.classList.toggle("open");

            mobileMenuButton.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );


    const mobileLinks =
        mobileNav.querySelectorAll("a");


    mobileLinks.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove("open");

                mobileMenuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}