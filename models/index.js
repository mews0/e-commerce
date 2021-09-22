// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Product belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Category hasMany Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// Product belongsToMany Tag (through ProductTag)
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tag belongsToMany Product (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});

// ProductTag belongsTo Product
ProductTag.belongsTo(Product, {
  foreignKey: 'product_id',
  onDelete: 'SET NULL'
});

// Product hasMany ProductTag
Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
});

// ProductTag belongsTo Tag
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id',
  onDelete: 'SET NULL'
});

// Tag hasMany ProductTag
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};