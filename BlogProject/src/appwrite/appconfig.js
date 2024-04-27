import config from "../config/config.js";
import { Databases, Client, ID, Storage, Query } from "appwrite";

export class DBService {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status, userId }
      );
    } catch (error) {
      throw error;
    }
  }

  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("APPwrite : DELETE POST ERROR", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      await this.databases.getDocument(
        config.appwriteDBId,
        config.appwriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("GET SLUG APPWRITE ERROR ", error);
    }
  }

  async getPosts(Queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        config.appwriteDBId,
        config.appwriteProjectId,
        Queries
      );
    } catch (error) {
      console.log("APPWrite get posts error", error);
      return false;
    }
  }

  // file upload methods

  async uploadFile(file) {
    try {
      await this.bucket.createFile(config.appwriteBucketId, ID.unique(), file);
    } catch (error) {
      console.log("APPWrite upload file ", error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.appwriteBucketId, fileId);
      return true;
    } catch (error) {
      console.log("APPWrite upload file ", error);
      return false;
    }
  }
  getfilepreview(fileId) {
    try {
      this.bucket.getFilePreview(config.appwriteBucketId, fileId);
    } catch (error) {}
  }
}

const dbService = new DBService();
export default dbService;
