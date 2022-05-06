const {
  user,
  cart,
  book,
  transaction,
  purchasedBook,
} = require("../../models");

//Add Transaction
exports.addTransaction = async (req, res) => {
  try {
    let dataUser = req.user;

    let listCart = await cart.findAll({
      where: {
        idUser: dataUser.id,
      },
      include: [
        {
          model: book,
          as: "book",
          attributes: {
            exclude: ["createdAt", "updatedAt"],
          },
        },
      ],
    });

    if (listCart.length == 0) {
      return res.send({
        message: "Cart is Empty!",
      });
    }

    let listProducts = listCart.map((item) => {
      return item.book.title;
    });

    let prices = listCart
      .map((item) => {
        return item.total;
      })
      .reduce((a, b) => a + b, 0);

    let data = {
      nameBuyer: dataUser.name,
      products: listProducts.join(","),
      total: prices,
      status: "pending",
      idUser: dataUser.id,
    };

    let pushTrx = await transaction.create(data);

    //Kalau Midtrans sudah Jadi pindahkan ke Notif sampai Cart Destroy
    let purBookData = await listCart.map((item) => {
      return purchasedBook.create({
        idUser: dataUser.id,
        idBook: item.book.id,
      });
    });

    await cart.destroy({
      where: {
        idUser: dataUser.id,
      },
    });

    res.send({
      status: "Success",
      pushTrx,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Add Transaction Error",
    });
  }
};

exports.getTrxs = async (req, res) => {
  try {
    let trx = await transaction.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "Success",
      trx,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Failed",
      message: "Get All Transaction Error",
    });
  }
};
