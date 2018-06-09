var textToReplace = 'Spain';

var names = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cabo Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Republic of the Congo',
    'Democratic Republic of the Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'The Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kosovo',
    'Kuwait',
    'Kyrgyz Republic',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Korea',
    'South Africa',
    'South Sudan',
    'Sri Lanka',
    'Spain',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania ',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom ',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'

];
//var destFolder = Folder.selectDialog( 'Select the folder where you want to save files.', '~' );
var doc = app.documents[0];


for (i = 0; i < doc.textFrames.length; i++) {
    contentString = doc.textFrames[i].contents;
    if (contentString.indexOf(textToReplace) != -1) {
        for (var idx = 0; idx < names.length; idx++) {
            doc.textFrames[i].contents = names[idx];
            //doc.textFrames[i].createOutline();
            var str = 'C:/vectors/' + names[idx];
            var f = new Folder(str);
            if (!f.exists) {
                f.create()
            }
            targetFileAI = new File(f + '/' + names[idx] + '4black' + '.ai');

            targetFilePNG = new File(f + '/' + names[idx] + '4black' + '.png');
            pngOptions = exportFileToPNG24();

            var options = exportFileToAI();
            doc.saveAs(targetFileAI, options);
            doc.exportFile(targetFilePNG, ExportType.PNG24, pngOptions);

            undo();
        }
    }
}

function exportFileToAI() {
    var saveOptions = new IllustratorSaveOptions();
    saveOptions.embedICCProfile = true;
    return saveOptions;
}

function getPDFOptions() {
    var pdfSaveOpts = new PDFSaveOptions();
    pdfSaveOpts.acrobatLayers = false;
    pdfSaveOpts.colorBars = false;
    pdfSaveOpts.colorCompression = CompressionQuality.AUTOMATICJPEGHIGH;
    pdfSaveOpts.compressArt = true;
    pdfSaveOpts.embedICCProfile = true;
    pdfSaveOpts.enablePlainText = true;
    pdfSaveOpts.generateThumbnails = false;
    pdfSaveOpts.optimization = true;
    pdfSaveOpts.pageInformation = false;
    return pdfSaveOpts;
}

function exportFileToPNG24() {
    var options = new ExportOptionsPNG24();
    options.artBoardClipping = true;

    return options;
}
