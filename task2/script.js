document.addEventListener('DOMContentLoaded', function() {
    const btn = document.body.querySelector('.btn');
   
    
    btn.addEventListener('click', function() {
        let clientWidth  = document.documentElement.clientWidth;
        let clientHeight  = document.documentElement.clientHeight;
        let scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight);
        let scrollWidht = Math.max(
                document.body.scrollWidth, document.documentElement.scrollWidth,
                document.body.offsetWidth, document.documentElement.offsetWidth,
                document.body.clientWidth, document.documentElement.clientWidth);

        alert( `Ширина видимой части документа: ${clientWidth}, высота видимой части документа: ${clientHeight}, ширина всего документа со всей прокручиваемой областью страницы: ${scrollWidht}, высота всего документа со всей прокручиваемой областью страницы: ${scrollHeight}`
        )
    });
})