//models
import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/sequelize.config";
import { UserAttributes, UserSignupAttributes } from "../../types/user.types";
const currentDate = new Date();
const userPasswordValidityPeriod = new Date(currentDate);
userPasswordValidityPeriod.setMonth(currentDate.getMonth() + 3);

class User
  extends Model<UserAttributes, UserSignupAttributes>
  implements UserAttributes
{
  declare id: string;

  declare firstName: string;

  declare lastName: string;

  declare email: string;

  declare password: string;

  declare phone: string;

  declare birthDate: Date;

  declare gender: string;

  declare preferredLanguage: string;

  declare preferredCurrency: string;

  declare whereYouLive: string;

  declare billingAddress: string;

  declare verified: boolean;

  declare role: string;

  declare profileURL: string;

  declare isActive: boolean;

  declare createdAt: Date;

  declare updatedAt: Date;
}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      onDelete: "CASCADE",
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    birthDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },

    gender: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },

    preferredLanguage: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },

    preferredCurrency: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },

    whereYouLive: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },

    billingAddress: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },

    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    role: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
    },

    profileURL: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    
    
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: true,
      type: DataTypes.DATE,
    },


  },
  {
    timestamps: true,
    sequelize: sequelize,
    modelName: "User",
    tableName: "users",
  }
);

export default User;


//types

import { Optional } from "sequelize";

export interface UserAttributes {
    id?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    email?: string;
    role?: string;
    password?: string;
    profileURL?: string;
    phone?: string;
    birthDate?: Date;
    preferredLanguage?: string;
    preferredCurrency?: string;
    whereYouLive?: string;
    billingAddress?: string;
    verified?: boolean;
    isActive?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }


  export interface UserSignupAttributes
  extends Optional<
    UserAttributes,
    | "id"
    | "firstName"
    | "lastName"
    | "gender"
    | "password"
    | "preferredLanguage"
    | "preferredCurrency"
    | "email"
    | "whereYouLive"
    | "billingAddress"
    | "role"
    | "phone"
    | "updatedAt"
  > {}

export interface UserOutputs extends Required<UserAttributes> {}





//migrations

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users',  {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        onDelete: "CASCADE",
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
      },
  
      birthDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
  
      gender: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
  
      preferredLanguage: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
  
      preferredCurrency: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
  
      whereYouLive: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
  
      billingAddress: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
  
      verified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
  
      role: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "",
      },
  
      profileURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      
      
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updatedAt: {
        allowNull: true,
        type: DataTypes.DATE,
      },
  
  
    },
    {
      timestamps: true,
      sequelize: sequelize,
      modelName: "User",
      tableName: "users",
    }
  );
  
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};







