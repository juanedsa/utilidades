/**
 * Utilidades de Cifrado Generico.
 * 
 * @author Juan Salazar
 * @fecha  16/05/2014
 */
var CifrarGenerico  = function(llave) {


	/* Llave para la encripcion*/
	this.LLAVE_GENERICO = "5e624d5a39412a40715465543f2d4a59";

	/** Token para la encripcion */
	this.TOKEN_GENERICO = "tgRUh5%4kv$gQu&5";

	/** Vector de incializacion*/
	this.IV_GENERICO = "3825614c6d2321215a54512a33597872";
	
	/**
	 * funcion encargada de cifrar un dato
	 * 
	 * @param mensaje	= Texto que se desea cifrar.
	 */
	this.encriptar = function(mensaje, token) {
		
		var cifrado = "";

		var key = CryptoJS.enc.Hex.parse(this.LLAVE_GENERICO);
		var iv  = CryptoJS.enc.Hex.parse(this.IV_GENERICO);

		/** Se valida si viene token como parametro */
		if(token != undefined){
			this.TOKEN_GENERICO = token;
		}

		/** Se le agrega el token */
		mensaje = this.TOKEN_GENERICO + mensaje;

		/** Se cifra la mensaje */
    	cifrado = CryptoJS.AES.encrypt(mensaje, key, { iv: iv });
		
		return String(cifrado);
		
	};
	
	/**
	 * Funcion encargada de descifrar un dato
	 * 
	 * @param cifrado	= Texto que se desea descifrar.
	 * @param token		= Token para decifrar el texto.
	 */
	this.desencriptar  = function(cifrado, token) {

		cifrado = CryptoJS.enc.Base64.parse(cifrado);

		var iv  = CryptoJS.enc.Hex.parse(this.IV_GENERICO);
		var key = CryptoJS.enc.Hex.parse(this.LLAVE_GENERICO);

		/** Se valida si viene token como parametro */
		if(token != undefined){
			this.TOKEN_GENERICO = token;
		}

		/** Se desencripta */
		descifrado = CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(
    												{ ciphertext: cifrado },
    																	  key, 
    												{ mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7, iv: iv,  }));

		/** Se retira el Token */
		descifrado = descifrado.substring(this.TOKEN_GENERICO.length, descifrado.length);
		
		return descifrado;
	};


	/**
	 * Funcion encargada de pasar de string a Hexa.
	 *
	 * @param string	= String para pasar a Hexa.
	 */
	this.hexEncode = function(string){
          var hex, i;

          var result = "";
          for (i=0; i<string.length; i++) {
              hex = string.charCodeAt(i).toString(16);
              result += (""+hex).slice(-4);
          }

          return result
     };


	
     /**
      * Se valida si la encripcion requiere llave.
      */
	if(llave != undefined ){

		/** Se descifra la llave */
	    var str = String(this.desencriptar(llave));

	    /** Se asgina la nueva llave */
	    this.LLAVE_GENERICO = String(this.hexEncode(str));

	}
};