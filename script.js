$(document).ready(function() { 
    $('.aboutTrigger').click(function() {
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        $('.aboutView').addClass("active");
        $('.index').removeClass("active");
        $('.browserView').removeClass("active");
        $('.installationView').removeClass("active");
        $('.movimgView').removeClass("active");
        $('.publicationView').removeClass("active");
        $('.posterView').removeClass("active");
        $('.identityView').removeClass("active");
        $('.typeView').removeClass("active");
    });

    $( '.filterbutton' ).click( function( ) {
        var button = $( this );

        var active_class = button.text( );

        if ( active_class == 'all-projects' ) {
            $( '.img-grid .box' ).css( {opacity: 1.0} );
            // $( '.img-grid .box' ).show();
        } else {
            $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).css( {opacity: 0.09}  );
            $( '.img-grid .box.' + active_class ).css( {opacity: 1.0} );
            // $( '.img-grid .box' ).not( '.img-grid .box.' + active_class ).hide()
            // $( '.img-grid .box.' + active_class ).show()
        }

        button.addClass("active");
        button.siblings().removeClass("active");

        $( '.index' ).addClass( 'active' );
        $( '.aboutView' ).removeClass( 'active' );
    })

        });


function initTooltip() {
    const tooltips = Array.from(document.querySelectorAll('[data-tooltip-container]'));

    tooltips.map(tooltip => {
        tooltip.addEventListener('mouseover', handleMouseOver);
    })

    function handleMouseOver() {
        const tooltipbox = createTooltipBox(this);

        handleMouseMove.tooltipbox = tooltipbox;
        this.addEventListener('mousemove', handleMouseMove);

        handleMouseLeave.tooltipbox = tooltipbox;
        handleMouseLeave.element = this;
        this.addEventListener('mouseleave', handleMouseLeave);
    }

    const handleMouseLeave = {
        handleEvent() {
            this.tooltipbox.remove();
            this.element.removeEventListener('mousemove', handleMouseMove);
            this.element.removeEventListener('mouseleave', handleMouseLeave);
        }
    }

    const handleMouseMove = {
        handleEvent(e) {
            this.tooltipbox.style.top = e.clientY + 25 + 'px';
            this.tooltipbox.style.left = e.clientX + 13 +'px';
        }
    }

    function createTooltipBox(el) {
        let tooltip = document.createElement('div');
        tooltip.innerText = el.getAttribute('data-tooltip-label');
        tooltip.classList.add('tooltip');

        document.body.appendChild(tooltip);
        
        return tooltip;
    }
}

initTooltip();
