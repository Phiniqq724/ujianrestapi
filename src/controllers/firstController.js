exports.bilangan = (req, res) => {
    let number = Number(req.params.number)
    let keterangan = ""
    if(number % 2 == 0) {
        keterangan = "genap"
    } else {
        keterangan = "ganjil"
    }

    let response = {
        number: number,
        result: keterangan
    }

    return res.json(response)
}