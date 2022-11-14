$(document).ready(function () {
	
	function ajustarPreco() {
		
		kit_selecionado = "";
		if ($('#pote-1').hasClass("active")) {
			kit_selecionado = "1";
		} else if ($('#pote-3').hasClass("active")) {
			kit_selecionado = "3";
		} else if ($('#pote-6').hasClass("active")) {
			kit_selecionado = "6";
		}
		
		assinatura = false;
		if ($("#opcao-assinatura").length) {
			//Mobile
			assinatura = $("#opcao-assinatura").hasClass("active");			
		} else if ($("#checkbox-subscriber").length) {
			//Desktop
			assinatura = $('#checkbox-subscriber').is(':checked');
		}
		
		switch(kit_selecionado) {
			case "1":
				if (assinatura) {
					/* Assinatura */
					$('#kit-preco-por-pote').text($('#kit-preco-por-pote').attr('data-assinatura-1'));
					$('#kit-valor-parcela').text($('#kit-valor-parcela').attr('data-assinatura-1'));
					$('#kit-economize').text($('#kit-economize').attr('data-assinatura-1'));
					$('#kit-preco-a-vista').text($('#kit-preco-a-vista').attr('data-assinatura-1'));
					$('#btn_carrinho').attr("href", $('#btn_carrinho').attr('href-assinatura-1'));
					$('.termos-assinatura').show();
				} else {
					/* Compra Única */
					$('#kit-preco-por-pote').text($('#kit-preco-por-pote').attr('data-compra-unica-1'));
					$('#kit-valor-parcela').text($('#kit-valor-parcela').attr('data-compra-unica-1'));
					$('#kit-economize').text($('#kit-economize').attr('data-compra-unica-1'));
					$('#kit-preco-a-vista').text($('#kit-preco-a-vista').attr('data-compra-unica-1'));
					$('#btn_carrinho').attr("href", $('#btn_carrinho').attr('href-compra-unica-1'));
					$('.termos-assinatura').hide();
				}
				break;
			case "3":
				if (assinatura) {
					/* Assinatura */
					$('#kit-preco-por-pote').text($('#kit-preco-por-pote').attr('data-assinatura-3'));
					$('#kit-valor-parcela').text($('#kit-valor-parcela').attr('data-assinatura-3'));
					$('#kit-economize').text($('#kit-economize').attr('data-assinatura-3'));
					$('#kit-preco-a-vista').text($('#kit-preco-a-vista').attr('data-assinatura-3'));
					$('#btn_carrinho').attr("href", $('#btn_carrinho').attr('href-assinatura-3'));
					$('.termos-assinatura').show();
				} else {
					/* Compra Única */
					$('#kit-preco-por-pote').text($('#kit-preco-por-pote').attr('data-compra-unica-3'));
					$('#kit-valor-parcela').text($('#kit-valor-parcela').attr('data-compra-unica-3'));
					$('#kit-economize').text($('#kit-economize').attr('data-compra-unica-3'));
					$('#kit-preco-a-vista').text($('#kit-preco-a-vista').attr('data-compra-unica-3'));
					$('#btn_carrinho').attr("href", $('#btn_carrinho').attr('href-compra-unica-3'));
					$('.termos-assinatura').hide();
				}
				break;
			case "6":
				if (assinatura) {
					/* Assinatura */
					$('#kit-preco-por-pote').text($('#kit-preco-por-pote').attr('data-assinatura-6'));
					$('#kit-valor-parcela').text($('#kit-valor-parcela').attr('data-assinatura-6'));
					$('#kit-economize').text($('#kit-economize').attr('data-assinatura-6'));
					$('#kit-preco-a-vista').text($('#kit-preco-a-vista').attr('data-assinatura-6'));
					$('#btn_carrinho').attr("href", $('#btn_carrinho').attr('href-assinatura-6'));
					$('.termos-assinatura').show();
				} else {
					/* Compra Única */
					$('#kit-preco-por-pote').text($('#kit-preco-por-pote').attr('data-compra-unica-6'));
					$('#kit-valor-parcela').text($('#kit-valor-parcela').attr('data-compra-unica-6'));
					$('#kit-economize').text($('#kit-economize').attr('data-compra-unica-6'));
					$('#kit-preco-a-vista').text($('#kit-preco-a-vista').attr('data-compra-unica-6'));
					$('#btn_carrinho').attr("href", $('#btn_carrinho').attr('href-compra-unica-6'));
					$('.termos-assinatura').hide();
				}
				break;
		}
	}
	
	/* Tooltip (Apenas Desktop) */
	if ($("#checkbox-subscriber").length) {
		$.protip();
	}	
	
	/* Seta link inicial do botão */
	$('#btn_carrinho').attr("href", $('#btn_carrinho').attr('href-compra-unica-3'));
	
	/* Clique nos potes */
	$('#pote-1').on('click', function (event) {
		event.preventDefault();
        $('.pote').removeClass("active");
		$(this).addClass("active");
		ajustarPreco();
    });
	
	$('#pote-3').on('click', function (event) {
		event.preventDefault();
        $('.pote').removeClass("active");
		$(this).addClass("active");
		ajustarPreco();
    });
	
	$('#pote-6').on('click', function (event) {
		event.preventDefault();		
        $('.pote').removeClass("active");
		$(this).addClass("active");
		ajustarPreco();		
    });
	/* Clique nos potes */
	
		
	$('#opcao-compra-unica').on('click', function (event) {
		$(this).addClass("active");
		$('#opcao-assinatura').removeClass("active");
		ajustarPreco();
	});
	$('#opcao-assinatura').on('click', function (event) {
		$(this).addClass("active");
		$('#opcao-compra-unica').removeClass("active");
		ajustarPreco();
	});
	
    /* Checkbox */
    $('.checkbox-subscriber').on('change', function () {
		ajustarPreco();
        if ($(this).is(':checked')) {
			$('#texto-sim').addClass("text-success");
            $(this).parent().find('img').attr('src', '../../assets/img/check-icon-mobile-checked.png');
            $('ul.img-list img').attr('src', '../../assets/img/check-icon-green.png');
        } else {
			$('#texto-sim').removeClass("text-success");
            $(this).parent().find('img').attr('src', '../../assets/img/check-icon-mobile.png');
            $('ul.img-list img').attr('src', '../../assets/img/check-icon.png');
        }
    });

    /* Image preview */
    $('[data-quantity]').on('click', function () {
    	var prefixo_produto = $('#prefixo-produto').val();
        $('#product-preview').attr('src', '../../assets/img/produtos/' + prefixo_produto + '-' + $(this).data('quantity') + '.png');
    });
    $('#pills-buy-type .nav-link').on('click', function () {
		var prefixo_produto = $('#prefixo-produto').val();
        var target = $(this).attr('href');
        $('#product-preview').attr('src', '../../assets/img/produtos/' + prefixo_produto + '-' + $(target).find('.nav-link.active').data('quantity') + '.png');
    });

    /* Smooth scroll */
    $('.smooth').on('click', function () {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - 30
        }, 500);
        return false;
    });

    /* Faq */

    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".icon").addClass("icon-minus").removeClass("icon-plus");
    });

    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".icon").removeClass("icon-plus").addClass("icon-minus");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".icon").removeClass("icon-minus").addClass("icon-plus");
    });

		// Add year for footer
		var ano = new Date().getFullYear();
    $('#ano').text(ano)

});