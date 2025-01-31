/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * oauthabl API
 * OpenAPI spec version: 1.0.0
 */
import { z as zod } from "zod";

export const postOauthOauthTokenBody = zod.object({
  clientId: zod.string().min(1),
  clientSecret: zod.string().min(1),
  email: zod.string().min(1),
  password: zod.string().min(1),
});

export const getOauthOauthSessionsResponseItem = zod.object({
  id: zod.string().min(1),
  userAgent: zod.string().min(1),
  loggedInAt: zod.string().datetime(),
  ip: zod.string(),
  expiresAt: zod.string().datetime(),
  currentSession: zod.boolean(),
});
export const getOauthOauthSessionsResponse = zod.array(
  getOauthOauthSessionsResponseItem
);

export const deleteOauthOauthSessionsSessionIdParams = zod.object({
  sessionId: zod.string().min(1),
});
