import pdfkit
import sys
pdfkit.from_url('https://inventory.newkitrade.com/ProformaReport/index/'+sys.argv[1], 'wwwroot/packing-'+sys.argv[1]+'.pdf')
